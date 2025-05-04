function DeleteUser({ userId, onDelete }) {
    return (
      <button type="button" onClick={() => onDelete(userId)}>
        Delete User
      </button>
    );
  }
  
  export default DeleteUser;