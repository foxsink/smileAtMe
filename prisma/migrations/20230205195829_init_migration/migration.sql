-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "article" TEXT NOT NULL,
    "image_path" VARCHAR(255) NOT NULL,
    "image_title" VARCHAR(255),
    "author" VARCHAR(70),
    "audio_path" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);
