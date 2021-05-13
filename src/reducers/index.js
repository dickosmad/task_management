const initialState = [
        {
        id:'1',
        title:'Learn React',
        description:'Want to learn React',
        status:'In Progress'
      },
      {
        id:'2',
        title:'Learn Javascript and  React',
        description:'Want to learn JS and master  React',
        status:'In Progress'
      }
  ]

const tasks = (state= {tasks:initialState}, action) =>{
  return state
};

export default tasks; 