const axios = require("axios");

endpoint = "https://api.peterportal.org/graphql/";

/**
 * Given a courseId String, return a GQL JSON response containing course data.
 * @param {string} courseId  UCI Course ID (ex. COMPSCI151).
 * @returns                  Response data in JSON format.
 */
async function fetchCourse(courseId) {
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: `
        query {
          course(id:"${courseId}") {
              id
              description
              corequisite
              restriction
              prerequisite_text
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

async function fetchGE(courseId) {
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: `
            query {
              course(id:"${courseId}") {
                  ge_list
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

module.exports = { fetchCourse, fetchRStrings, fetchGE };
