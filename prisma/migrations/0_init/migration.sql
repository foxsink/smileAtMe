-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "article" TEXT NOT NULL,
    "image_path" VARCHAR(255) NOT NULL,
    "audio_path" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);