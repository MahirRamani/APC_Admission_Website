function InvalidIdException(): { status: number; message: string } {
    return {
        status: 400,
        message: 'Invalid ID',
    };
}

function UserNotFoundException(): { status: number; message: string } {
    return {
        status: 404,
        message: 'User not found',
    };
}

export { InvalidIdException,UserNotFoundException };