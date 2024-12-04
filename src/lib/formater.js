import dayjs from "dayjs";

export const getYear = (date) => {
  const year = dayjs(date).format("YYYY");

  return year;
};

export const formatGenres = (genres) => {
  if (!genres) {
    return "";
  }

  const genreString = genres.map((genre) => genre.name).join(", ");

  return genreString;
};

export const formatRuntime = (runtime) => {
  if (!runtime) {
    return "";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

export const formatRating = (rating) => {
  if (!rating) {
    return "";
  }

  const fix = Number(rating.toFixed(1));

  return fix;
};

export const formatDate = (date) => {
  if (!date) {
    return "";
  }

  const formattedDate = dayjs(date).format("D MMMM YYYY");

  return formattedDate;
};
