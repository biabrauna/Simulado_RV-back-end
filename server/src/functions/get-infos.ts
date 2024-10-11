import { db } from '@/db'
import { tests } from '@/db/schema'

export async function getInfos() {
    try {
      const infos = await db.select().from(tests);
      return {infos};
    } catch (error) {
      console.error('Error fetching infos:', error);
      throw new Error('Failed to fetch informacoes.');
    }
  }
  