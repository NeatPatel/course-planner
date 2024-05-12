const { gql, GraphQLClient } = require('graphql-request');
const axios = require("axios");


endpoint = 'https://api.peterportal.org/graphql/';

/**
 * Given a courseId String, return a GQL JSON response containing course data.
 * @param {string} courseId  UCI Course ID (ex. COMPSCI151).
 * @returns                  Response data in JSON format.
 */
const fetchCourse = async (courseId) => {
    const cli = new GraphQLClient(endpoint);
    
    const query = gql`
        query {
            course(id:"${courseId}") {
                id
                description
                corequisite
                restriction
                prerequisite_text
            }
        }    
    `
    const results = await cli.request(query);

    return results;
}

/**
 * Given a courseId String, return a GQL JSON response containing course data.
 * @param {string} courseId 
 * @returns 
 */
async function fetchRStrings(courseId) {
    try {
      const response = await axios({
        url: "https://api.peterportal.org/graphql/",
        method: "post",
        data: {
          query: `
            query {
              course(id:"${courseId}") {
                  prerequisite_text
                  corequisite
              }
            }    
          `,
        },
      });
      return response.data;
    } catch (error) {
      return "ERROR: Requisite fetching";
    }
  }
  


module.exports = [ fetchCourse, fetchRStrings ];
