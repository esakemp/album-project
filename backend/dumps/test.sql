SELECT
    "band"."band_id",
    "band"."band_name",
    "band"."resource_url",
    "band"."created_at",
    "band"."updated_at",
    "band"."created_at" AS "createdAt",
    "band"."updated_at" AS "updatedAt",
    "albums"."album_id" AS "albums.album_id",
    "albums"."title" AS "albums.title",
    "albums"."date_added" AS "albums.date_added",
    "albums"."year" AS "albums.year",
    "albums"."resource_url" AS "albums.resource_url",
    "albums"."created_at" AS "albums.created_at",
    "albums"."updated_at" AS "albums.updated_at",
    "albums"."created_at" AS "albums.createdAt",
    "albums"."updated_at" AS "albums.updatedAt",
    "albums->albumartist"."album_id" AS "albums.albumartist.album_id",
    "albums->albumartist"."band_id" AS "albums.albumartist.band_id",
    "albums->albumartist"."created_at" AS "albums.albumartist.created_at",
    "albums->albumartist"."updated_at" AS "albums.albumartist.updated_at",
    "albums->albumartist"."created_at" AS "albums.albumartist.createdAt",
    "albums->albumartist"."updated_at" AS "albums.albumartist.updatedAt",
    "albums->albumartist"."band_band_id" AS "albums.albumartist.bandBandId",
    "albums->albumartist"."album_album_id" AS "albums.albumartist.albumAlbumId"
FROM
    "public"."bands" AS "band"
    LEFT OUTER JOIN (
        "public"."albumartists" AS "albums->albumartist"
        INNER JOIN "public"."albums" AS "albums" ON "albums"."album_id" = "albums->albumartist"."album_album_id"
    ) ON "band"."band_id" = "albums->albumartist"."band_band_id";