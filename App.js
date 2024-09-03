const headingEl = React.createElement("div" , {id : "parent"} , 
    [React.createElement("div", {id : "child1"},
     [React.createElement("h1", {}, "Hello world from reactjs"), 
        React.createElement("p", {}, "Hello world from paragraph"),
        React.createElement("p", {}, "Hello world from paragraph")]),
        React.createElement("div", {id : "child2"},
            [React.createElement("h1", {}, "Hello world from reactjs"), 
               React.createElement("p", {}, "Hello world from paragraph"),
               React.createElement("p", {}, "Hello world from paragraph")])
    ]
    
    )

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(headingEl)