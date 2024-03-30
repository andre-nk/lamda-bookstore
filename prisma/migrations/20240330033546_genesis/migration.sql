/*
  Warnings:

  - You are about to alter the column `bookId` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `review` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `userId` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `user_image` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `user_name` on the `Review` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `bookId` on the `SavedBook` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `SavedBook` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `userId` on the `SavedBook` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `author` on the `Book` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `genre` on the `Book` table. The data in that column will be cast from `String` to `Enum(EnumId(0))`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `id` on the `Book` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `img` on the `Book` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.
  - You are about to alter the column `title` on the `Book` table. The data in that column will be cast from `String` to `String`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- CreateEnum
CREATE TYPE "GENRE" AS ENUM ('historical', 'fiction', 'science');

-- CreateTable
CREATE TABLE "Widget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- RedefineTables
CREATE TABLE "_prisma_new_Review" (
    "id" STRING NOT NULL,
    "review" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "bookId" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_name" STRING NOT NULL,
    "user_image" STRING NOT NULL DEFAULT '',

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Review" ("bookId","date","id","review","userId","user_image","user_name") SELECT "bookId","date","id","review","userId","user_image","user_name" FROM "Review";
DROP TABLE "Review" CASCADE;
ALTER TABLE "_prisma_new_Review" RENAME TO "Review";
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE "_prisma_new_SavedBook" (
    "id" STRING NOT NULL,
    "bookId" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "SavedBook_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_SavedBook" ("bookId","id","userId") SELECT "bookId","id","userId" FROM "SavedBook";
DROP TABLE "SavedBook" CASCADE;
ALTER TABLE "_prisma_new_SavedBook" RENAME TO "SavedBook";
ALTER TABLE "SavedBook" ADD CONSTRAINT "SavedBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
CREATE TABLE "_prisma_new_Book" (
    "id" STRING NOT NULL,
    "author" STRING NOT NULL,
    "title" STRING NOT NULL,
    "rating" FLOAT8,
    "publicationDate" TIMESTAMP(3) NOT NULL,
    "genre" "GENRE" NOT NULL,
    "img" STRING DEFAULT '',

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Book" ("author","genre","id","img","publicationDate","rating","title") SELECT "author","genre","id","img","publicationDate","rating","title" FROM "Book";
DROP TABLE "Book" CASCADE;
ALTER TABLE "_prisma_new_Book" RENAME TO "Book";
