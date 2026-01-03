const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

export const formatMonthYear = (value: string) => {
  if (value.toLowerCase() === "present") {
    return "Present";
  }
  const [year, month] = value.split("-");
  const monthIndex = Number(month) - 1;
  if (!year || Number.isNaN(monthIndex)) {
    return value;
  }
  const date = new Date(Number(year), monthIndex, 1);
  return monthFormatter.format(date);
};

export const formatDateRange = (start: string, end: string) => {
  return `${formatMonthYear(start)} — ${formatMonthYear(end)}`;
};
