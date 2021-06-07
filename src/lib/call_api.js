class ApiClient {
  constructor() {
    this.url = 'localhost:3000'
  }

  people_list() {
    return(
      [
        {name: "Rey Verga", lastActivity: "a year ago"},
        {name: "Noremberga", lastActivity: "right now"},
        {name: "Sinecrap", lastActivity: "two hours ago"}
      ]
    )
  }
}

export default ApiClient
