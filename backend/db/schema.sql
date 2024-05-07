CREATE TABLE users(
    /* The following is the email of the user, being used as the primary key */
    email TEXT PRIMARY KEY,
    
    /* The following is the course data of the user, held as unparsed string */
    course_data TEXT,

) STRICT;