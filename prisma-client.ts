import { PrismaClient } from '@prisma/client'
import mockData from './mocks/mockData'
import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3'
// import { PrismaClient } from './generated/prisma'

const adapter = new PrismaBetterSQLite3({
    url: 'file:./prisma/dev.db',
})
const prisma = new PrismaClient({ adapter })

const main = async () => {
    await prisma.book.deleteMany({})

    await Promise.all(
        mockData.map(async (book) => {
            return await prisma.book.create({
                data: book,
            })
        })
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
