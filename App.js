// creating heading using js----------------------

// const root = document.getElementById('root')
// const heading = document.createElement('h1')
// heading.innerHTML = "Heading using JS"
// root.appendChild(heading)



// Create heading using react------------------------------------
// React.createElement returns a js object
// root.render take this object and convert it into html element


const heading = React.createElement('h1', {
    //this all are the props (attributes +  childern)
    id: "mainHeading",
    xyc: "kuchBhi"
}, "Our First React Code")

// // console.log(heading);

// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(heading)





// // Nested React element

// {/* <div id="parent">
//     <div id="child1">
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//     </div>
//     <div id="child2">
//         <h1>Heading 1</h1>
//         <h2>Heading 2</h2>
//     </div>
// </div> */}



const parent = React.createElement('div', {
    id: "parent"
},
    [
        React.createElement('div', { id: "child1" },
            [
                React.createElement('h1', {}, "Heading 1"), // we using Array of Childern if we want to insert multiple childern
                React.createElement('h2', {}, "Heading 1")
            ]

        ),
        React.createElement('div', { id: "child2" },
            [
                React.createElement('h1', {}, "Heading 1"), // we using Array of Childern if we want to insert multiple childern
                React.createElement('h2', {}, "Heading 1")
            ]

        )
    ]
)




const poster = React.createElement('div', { id: "poster" },
    React.createElement('p', { }, " this is something i want to try"),
    React.createElement('h1', { }, " A tree")
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
root.render(poster) //root.render replace the existing element with new element