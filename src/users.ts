import type { User } from "./types";

export const apiResponse: unknown = [
        { name: "Tony", age: 23 },
        { name: "Kevin", age: "24" }, // invalid
        { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
        const result: User[] = [];

        if (!Array.isArray(apiResponse)) {
                return [];
        }

        for (const item of apiResponse) {
                if (typeof item !== "object" || item === null) continue;
                
                const name = (item as any).name;
                const agestring = (item as any).age;
                const age = Number(agestring);

                if (typeof name === "string" && Number.isFinite(age)) {
                        result.push({name, age});
                }
                
        }

        return result;

}

export function formatAges(users: User[]): string[] {
        return users.map((u) => u.age.toFixed(0));
}
