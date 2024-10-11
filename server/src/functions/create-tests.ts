import { db } from "../db";
import { tests } from "../db/schema";

interface CreateTestRequest {
    id: string,
	title: string;
	subjects: string;
}

export async function createTest({ id, title, subjects }: CreateTestRequest) {
	const result = await db
		.insert(tests)
		.values({
            id,
			title,
			subjects,
		})
		.returning();

	const test = result[0];

	return {
		test,
	};
}
