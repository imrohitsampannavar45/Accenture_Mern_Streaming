import ConditionalRender from "./ConditionalRender";
import DataBinding from "./DataBinding";
import List_demo from "./List_Demo";

function App()

{

return (


<>
<ConditionalRender  isLoggedIn={false} />
< hr />
<DataBinding />
<hr />
<h1>List and Key Demo</h1>
<List_demo />
<hr />



</>

)


}

export default App;