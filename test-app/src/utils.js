import Airtable from 'airtable'

export const translate = (record) => {
  return {
    id: record.id,
    name: record.get('Name'),
    email: record.get('email'),
    phone: record.get('Phone Number')
  };
};

export const fetchOpenProjects = (onLoad) => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY}).base('appZORHxzAO18qQP8');
  let airtableRecords = [];

  base('Contact form')
    .select({
      view: 'Grid view'
    })
    .eachPage(
      async (records, fetchNextPage) => {
        airtableRecords = records.map((record) => translate(record));
        onLoad(airtableRecords)
        fetchNextPage();
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
