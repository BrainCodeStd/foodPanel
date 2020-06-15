// import * as API from "../../api/api";
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: 1,
  text
})

// export const create_quiz = data => {
//   return dispatch => {
//     try {
//       let response = API.createQuiz(data);
//       return response;
//     } catch (err) {
//       return err;
//     }
//   };
// };
// export const remove_question = data => {
//   return dispatch => {
//     try {
//       let response = API.removeQuiz(data);
//       return response;
//     } catch (err) {
//       return err;
//     }
//   };
// };
// export const get_SubjectData = params => {
//   return dispatch => {
//     try {
//       let response = API.getSubjectInfo(params);
//       return response;
//     } catch (err) {
//       return err;
//     }
//   };
// };
