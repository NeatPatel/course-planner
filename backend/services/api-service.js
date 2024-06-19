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
              prerequisite_text
              corequisite
              restriction
              units
              school
              department
              ge_text
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

async function fetchPRTree(courseId) {
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: `
            query {
              course(id:"${courseId}") {
                  prerequisite_tree
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

async function fetchPrereqs(courses) {
  let dataQuery = "";
  for (courseIndex in courses) {
    dataQuery += `
      c${courseIndex}:course(id:"${courses[courseIndex]}") {
        id
        prerequisite_tree
      }
    `
  }
  dataQuery = `query { ${dataQuery} }`
  
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: dataQuery,
      },
    });
    return response.data;
  } catch (error) {
    return "ERROR: Requisite fetching";
  }
}

async function fetchCoreqs(courses) {
  let dataQuery = "";
  for (courseIndex in courses) {
    dataQuery += `
      c${courseIndex}:course(id:"${courses[courseIndex]}") {
        id
        corequisite
      }
    `
  }
  dataQuery = `query { ${dataQuery} }`
  
  try {
    const response = await axios({
      url: "https://api.peterportal.org/graphql/",
      method: "post",
      data: {
        query: dataQuery,
      },
    });
    return response.data;
  } catch (error) {
    return "ERROR: Requisite fetching";
  }
}

module.exports = {
  fetchCourse,
  fetchRStrings,
  fetchGE,
  fetchPRTree,
  fetchPrereqs,
  fetchCoreqs
};
