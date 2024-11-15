import ConditionalRender from "./ConditionalRender";
import List_demo from "./List_Demo";

function App()

{

return (


<>
<ConditionalRender  isLoggedIn={true} />
< hr />

<List_demo />



</>

)


}

export default App;