const { gql, GraphQLClient } = require('graphql-request');

endpoint = 'https://api.peterportal.org/graphql/';

const fetchCourse = async (courseId) => {
    const cli = new GraphQLClient(endpoint);
    
    const query = gql`
        query {
            course(id:"${courseId}") {
                id
                description
                corequisite
                restriction
                department:
                prerequisite_for {
                    id
                }
                prerequisite_text
            }
        }    
    `
    const results = await cli.request(query);
    
    return results;
}

module.exports = fetchCourse;
