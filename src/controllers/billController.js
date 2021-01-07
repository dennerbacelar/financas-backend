const connection = require('../database/connection');

module.exports = {
   async index(request, response) {
      const [count] = await connection('bill').count();

      const bills = await connection('bill')
         .select('*');

      response.header('X-Total-Count', count['count(*)']);

      return response.json(bills);
   },
   async create(request, response) {
      let { name, date, value } = request.body;

      date = date.replace('-', '/');

      await connection('bill').insert({
         name,
         date,
         value
      });

      return response.json({ name });
   },
   async delete(request, response) {
      const { id } = request.params;

      await connection('bill').where('id', id).delete();

      return response.status(204).send();
   },
   async indexDateValues(request, response) {
      const bills = await connection('bill')
         .select('id', 'date')
         .sum('value as valorMensal')
         .groupBy('date');

      return response.json(bills);
   },
   async indexBillDate(request, response) {
      const { date } = request.query;
      const bills = await connection('bill')
         .select('*')
         .where('date', date)
      return response.json(bills);
   },
   async indexBillById(request, response) {
      const { id } = request.param;
      const bills = await connection('bill')
         .select('*')
         .where('id', id)
      console.log(bills);
      return response.json(bills);
   }
}