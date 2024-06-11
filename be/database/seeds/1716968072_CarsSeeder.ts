import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('cars').del();

    // Inserts seed entries
    await knex('cars').insert([
        { 
          id: 1, 
          name: "Honda Camry", 
          price:50000000, 
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715849971/fsw/i9w2bvzhkv3n5h7suew3.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        },
        { 
          id: 2, 
          name: "Bugatti Veyron", 
          price: 70000000, 
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715850166/fsw/yn7lfl9i4ok7dp8kiogs.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        },
        { 
          id: 3, 
          name: "Ferrari 458 Italy", 
          price: 5774000, 
          picture:'https://res.cloudinary.com/dfylrgzcu/image/upload/v1715850490/fsw/lha70u5wfv8aqyab7xr0.jpg',
          start_rent:'2024-05-30 12:14:00',
          finish_rent:'2024-06-20 12:14:00',
          created_at: '2024-05-15 15:47:25',
          updated_at: '2024-05-16 08:59:28'
        }
    ]);
};
