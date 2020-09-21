class StatisticsByCountry {
  constructor(country, confirmed, deaths, recovered, active, date) {
    this.country = country;
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.recovered = recovered;
    this.active = active;
    this.date = date;
  }
}

export default StatisticsByCountry;
