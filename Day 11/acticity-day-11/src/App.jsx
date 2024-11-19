import React from "react";
import CustomerForm from "./Customer";
import ConditionalRender from "./ConditionalRender";
import Company from "./Company";
function App() {
    return (
        <>
            <CustomerForm />
            <hr />
            <ConditionalRender flag={1} />

            < hr />
            <Company companyName="IBM" />



        </>
    );


}

export default App;