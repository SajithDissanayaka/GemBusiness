import { prisma } from "@/src/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function DatabaseTestPage() {
  const gems = await prisma.gem.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          PostgreSQL Database Test
        </h1>

        <p className="mb-6 text-gray-600">
          Total Gems: {gems.length}
        </p>

        <div className="grid gap-4 md:grid-cols-2">

          {gems.map((gem) => (
            <div
              key={gem.id}
              className="rounded-xl bg-white p-6 shadow"
            >

              <h2 className="text-xl font-bold text-gray-900">
                {gem.name}
              </h2>

              <p className="mt-2 text-gray-600">
                Type: {gem.type}
              </p>

              <p className="text-gray-600">
                Carat: {gem.carat}
              </p>

              <p className="text-gray-600">
                Price: LKR {gem.price.toLocaleString()}
              </p>

              <p className="mt-2 font-medium text-blue-600">
                Status: {gem.availability}
              </p>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}