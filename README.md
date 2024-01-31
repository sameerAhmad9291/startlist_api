# How to start

This project is using nestJS with graphql, i have used yarn for package installation.

```
yarn install
yarn run start
```

Why/what questions.

I have time i would integrated e2e tests, database, search filters can be improved for different fields less/greater than for dates, like operator and also refactor the code logic,
I have implemented repository logic to we can later integrate data.

## [live](https://startlist-api.vercel.app/graphql).
graphql playground is deployed on vercel. <br/>
<span style="background-color: yellow;"> NOTE:</span> due to vercel read only access. mutation will not write data into json.

### 🗒️ Docs

<details>
  <summary><b> Query: Retrieve Race Startlist Information</b></summary>
  <br/>
This GraphQL query retrieves information about race startlists including the event ID, race ID, event title, ticket title, and creation date.
  <br/>
  <br/>
  
```graphql
graphql
query {
  raceStartlist {
    eventId
    raceId
    eventTitle
    ticketTitle
    createdAt
  }
}
``` 
</details>

<details>
  <summary><b> Query: Sample Paginated Race Startlist Information</b></summary>
  <br/>
This GraphQL query retrieves paginated race startlist information. It allows fetching data based on specific page numbers and page sizes. The query returns the startlist ID, event ID, event title, and associated fields.
  <br/>
  <br/>
  
```graphql
query {
  paginatedRaceStartlist(page: 1, pageSize: 10) {
    id
    eventId
    eventTitle
    fields {
      id
      name
      value
    }
  }
}
``` 
</details>

<details>
  <summary><b>Query: Filter Race Startlist Information by Email Address</b></summary>
  <br/>
  This GraphQL query filters race startlist information based on the provided email address. It retrieves the startlist ID, event ID, and associated fields.
  <br/>
  <br/>
  
```graphql
query {
  filterRaceStartlist(emailAddress: "sameer.ahmad@example.com") {
    id
    eventId
    fields {
      id
      value
    }
  }
}
``` 
</details>

<details>
  <summary><b>Mutation: Add Race Startlist Entry</b></summary>
  <br/>
  This mutation adds a new entry to the race startlist with the provided details. It includes information such as the event ID, race ID, ticket ID, event title, race title, ticket title, and various fields associated with the entry.
  <br/>
  <br/>
  
```graphql
mutation {
  addRaceStartlistEntry(raceEntry: {
    eventId: "e000",
    raceId: "r001",
    ticketId: "t010",
    eventTitle: "Hackney Moves",
    raceTitle: "10k",
    ticketTitle: "Standard Ticket",
    fields: [
      { id: "firstName", name: "First Name", value: "Sameer" },
      { id: "lastName", name: "Last Name", value: "Ahmad" },
      { id: "emailAddress", name: "Email Address", value: "ali.ahmad@example.com" },
      { id: "gender", name: "Gender", value: "NON BINARY" },
      { id: "dateOfBirth", name: "Date of Birth", value: "2000-04-03" },
      { id: "addressLine1", name: "Address (Line 1)", value: "168

```

</details>

# Context

Before an event occurs, an event organiser needs to have a list of all the participants who are taking part in their event and which race they are running in. This list is called a "race startlist".
When someone makes a booking through our site, we need to collect all their relevant information and display it to our event organisers in a clear, easy to read format.

# The Data

We have prepared a JSON document for you that contains a set of race startlist records. The data can be found in this repo, in the `startlists.json` file.

We'd like you to create an API that exposes this dataset. You can use the JSON document as a replacement for a database, or add the data to a database if you'd prefer, but please don't feel you have to — spinning up a database isn't a particularly interesting use of your time!

We'd like you to add the following functionality to the API:

- Query for all the race startlist data in the dataset
- Add queries to search and filter data from the dataset
- Add in pagination to be used by a client that supports infinite scrolling
- Add an API for adding new race startlist entries to the dataset

# Submitting

Remember that when you send the test back, you can feel free to include any information about what you didn't do that you would have liked to, where you cut corners (and why) etc.

It’s unlikely you'll complete everything as perfectly as you would have liked, so please do feel free to add any colour through comments or notes!

Good luck!

---------------
