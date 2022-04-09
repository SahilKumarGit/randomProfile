let gender = () => {
    let val = Math.round(Math.random() * 10)
    if (val % 2 === 0) {
        return 'MAIL'
    }
    return 'FEMAIL'
}

let mailName = () => {
    let arr = ["rahul", "Abhishek", "Aditya", "Amit", "mahesh", "ROHIT", "yash", "Ankit", "shyam", "Deepak", "Aryan", "Raj", "Arjun", "Manoj", "ankur", "akash", "Karan", "rakesh", "Sam", "Naveen", "Ashish", "Vinay", "Parth", "Mayank", "vivek", "Aaditya", "Neeraj", "kumar", "Abhinav", "Soham", "Pranav", "Rohan", "ajith", "ABHI", "PRATEEK", "Raghav", "Rishabh", "Vaibhav", "jay", "Kunal", "vishal", "vikas", "Raju", "sanjay", "manish", "shivam", "Nishant", "Nitin", "Krishna", "krish", "john", "Anil", "prince", "Varun", "Anish", "ALOK", "abdul", "SUNNY", "Siddharth", "vedant", "manu", "MOHIT", "Arun", "Ajay", "Shashank", "Dhruv", "Anirudh", "Ram", "sanchit", "gokul", "Anubhav", "Sumit", "Deepro", "Shekhar", "Anurag", "Akshay", "Paaus", "shaan", "Nikhil", "Kartik", "GIRISH", "SHAIL", "Prashant", "Sunil", "Pratik", "Deep", "Ramanan", "Aniket", "Jatin", "dinesh", "pawan", "Rajeev", "atul", "mayur", "tushar", "Harish", "Avinash", "Avi", "SURESH", "Ajeet"]
    let random = Math.round(Math.random() * 99) + 1;
    return arr[random];
}

let femailName = () => {
    let arr = ["priya", "Tanya", "Priyanka", "divya", "tanvi", "Ishita", "vani", "Anjali", "Shreya", "riya", "Sneha", "Aishwarya", "Gayatri", "varsha", "Ira", "sanjana", "Niharika", "Nikita", "natasha", "Neha", "shivangi", "ramya", "Isha", "ananya", "shivani", "Sakshi", "Aswini", "Suhani", "leah", "Pavithra", "seema", "Anusha", "simran", "nishi", "Anushri", "Ayushi", "Radhika", "tanu", "krithika", "Anisha", "Akansha", "Sadaf", "Nishita", "diya", "Siya", "Abigail", "Kalyani", "Rishita", "Aastha", "Mary", "sara", "prachi", "indhumathi", "shrinidhi", "Papuii colney", "rhea", "Katherine", "Rutuja", "arti", "debbie", "Crowny", "manisha", "Mahima", "Aditi", "Aashna", "Tisha", "moii chhangte", "Sam", "swati", "dia", "ria", "anu", "Neelam", "N.Priyanka", "NISHA", "Chandralekha", "Mitali", "Dawn", "Dilmini", "kamalika", "Khushi", "Anjana", "Arya", "deepa", "juvina", "Angel", "anamika", "Lavanya", "ishika", "Lily", "Archita", "Rashi", "sarah", "sasashy", "vaishnavi", "diksha", "Arusha", "Niti", "vidhya", "kavya"]
    let random = Math.round(Math.random() * 99) + 1;
    return arr[random];
}

let LastName = () => {
    let arr = ["Devi", "Singh", "Kumar", "Das", "Kaur", "Ram", "Yadav", "Kumari", "Lal", "Bai", "Khatun", "Mandal", "Ali", "Sharma", "Ray", "Mondal", "Khan", "Sah", "Patel", "Prasad", "Patil", "Ghosh", "Pal", "Sahu", "Gupta", "Shaikh", "Bibi", "Sekh", "Begam", "Biswas", "Sarkar", "Paramar", "Khatoon", "Mahto", "Ansari", "Nayak", "Ma", "Rathod", "Jadhav", "Mahato", "Rani", "Barman", "Behera", "Mishra", "Chand", "Roy", "Begum", "Saha", "Paswan", "Thakur", "Thakor", "Ahamad", "Chauhan", "Pawar", "Majhi", "Bano", "Naik", "Pradhan", "Alam", "Shinde", "Malik", "Sardar", "Nath", "Raut", "Bauri", "Shaik", "Chandra", "Patra", "Jha", "Murmu", "Solanki", "Cauhan", "Shah", "Prakash", "Sinh", "Pandey", "Patal", "Munda", "Dutta", "Chaudhari", "Raj", "Pandit", "Jain", "Kamble", "Manjhi", "Rana", "Molla", "Chaudhary", "Makavan", "Jena", "Chakraborty", "Hussain", "Pathan", "Gayakwad", "Nisha", "Vasav", "Debnath", "Rai", "More", "Varma"];
    let random = Math.round(Math.random() * 99) + 1;
    return arr[random];
}




let randomNameOBJ = () => {
    let genderVal = gender()
    if (genderVal == "MAIL") {
        let N = mailName();
        let L = LastName()
        return {
            name: N + ' ' + L,
            email: N + '_' + L + '2000@gmail.com',
            age: Math.round(Math.random() * (70 - 18)) + (18 + 1),
            gender: genderVal
        }
    }

    let N = femailName();
    let L = LastName()
    return {
        name: N + ' ' + L,
        email: N + '_' + L + '2001@gmail.com',
        age: Math.round(Math.random() * (70 - 18)) + (18 + 1),
        gender: genderVal
    }

}


let generate = (req, res) => {
    let OUTPUT = {
        status: false,
        data: 'Somrthing went wrong...'
    }
    let length = Number(req.body.length);
    let arr = []

    if (length > 5000) {
        OUTPUT = {
            status: false,
            data: 'Max length of data is < 5000.'
        }
    } else {
        for (let i = 0; i < length; i++) {
            arr.push(randomNameOBJ())
        }
        OUTPUT = {
            status: true,
            data: arr
        }
    }



    res.send(OUTPUT)
}



module.exports.generate = generate