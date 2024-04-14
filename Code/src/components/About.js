// import React from "react";
// import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is About Pagedcfdv</h2>
//       <UserClass name={"Duke Soni"} location={"Jodhpur"} />
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import UserClass from "./UserClass";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor called");
//   }
//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }
//   render() {
//     console.log("Parent Rendered");
//     return (
//       <>
//         <UserClass />
//       </>
//     );
//   }
// }

// export default About;

//-------------------parent with multiple children-----------------
// import React from "react";
// import UserClass from "./UserClass";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor called");
//   }
//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }
//   render() {
//     console.log("Parent Rendered");
//     return (
//       <>
//         <UserClass name={"First Child"} location={"India"} />
//         <UserClass name={"Second Child"} location={"Pakistan"} />
//       </>
//     );
//   }
// }

// export default About;

//---------/API CALLING WITH CLASS BASED COMPONENTS---------------------------------------
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Rendered");
    return (
      <>
        <UserClass name={"First Child"} location={"India"} />
        {/* <UserClass name={"Second Child"} location={"Pakistan"} /> */}
      </>
    );
  }
}

export default About;
