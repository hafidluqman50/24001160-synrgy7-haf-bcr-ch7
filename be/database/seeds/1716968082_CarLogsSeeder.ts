import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('car_logs').del()
  
    // Inserts seed entries
    await knex("car_logs").insert([
      {
        id: 1,
        car_id: 2,
        user_id: 1,
        log_time: new Date(),
        type_action: 'INSERT'
      },
      {
        id: 2,
        car_id: 2,
        user_id: 1,
        log_time: new Date(),
        type_action: 'UPDATE'
      }
    ]);
};
