import * as types from '../../actions/actionTypes'
import reducer from '../../reducers/userReducer'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle FETCH_CURRENT_USER_AND_TOKEN', () => {
    expect(
      reducer({}, {
        type: types.FETCH_CURRENT_USER_AND_TOKEN,
        currentUser: { username: "a" },
        token: "token"
      })
    ).toEqual(
      {
        token: "token",
        username: "a"
      }
    )
  })

  it('should handle REMOVE_CURRENT_USER_AND_TOKEN', () => {
    expect(
      reducer({ token: "token", username: "a" }, {
        type: types.REMOVE_CURRENT_USER_AND_TOKEN,
      })
    ).toEqual({})
  })

  it('should handle ADD_POST', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [1, 2, 3],
          likedPosts: [],
          sentInvites: [],
          receivedInvites: []
        },
        {
          type: types.ADD_POST,
          postData: { id: 99 }
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [1, 2, 3, 99],
        likedPosts: [],
        sentInvites: [],
        receivedInvites: []
      }
    )
  })

  it('should handle DELETE_POST', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [1, 2, 3],
          likedPosts: [],
          sentInvites: [],
          receivedInvites: []
        },
        {
          type: types.DELETE_POST,
          postId: 3
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [1, 2],
        likedPosts: [],
        sentInvites: [],
        receivedInvites: []
      }
    )
  })

  it('should handle LIKE', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [1, 2, 3],
          likedPosts: [],
          sentInvites: [],
          receivedInvites: []
        },
        {
          type: types.LIKE,
          postId: 99
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [1, 2, 3],
        likedPosts: [99],
        sentInvites: [],
        receivedInvites: []
      }
    )
  })


  it('should handle UNLIKE', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [1, 2, 3],
          likedPosts: [99],
          sentInvites: [],
          receivedInvites: []
        },
        {
          type: types.UNLIKE,
          postId: 99
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [1, 2, 3],
        likedPosts: [],
        sentInvites: [],
        receivedInvites: []
      }
    )
  })

  it('should handle INVITE', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [],
          likedPosts: [],
          sentInvites: [],
          receivedInvites: []
        },
        {
          type: types.INVITE,
          postId: 99,
          postOwner: "b"
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [],
        likedPosts: [],
        sentInvites: [{ postId: 99, postOwner: "b" }],
        receivedInvites: []
      }
    )
  })


  it('should handle REMOVE_INVITE', () => {
    expect(
      reducer(
        {
          token: "token",
          username: "a",
          posts: [],
          likedPosts: [],
          sentInvites: [{ postId: 99, postOwner: "b" }],
          receivedInvites: []
        },
        {
          type: types.REMOVE_INVITE,
          postId: 99,
        })
    ).toEqual(
      {
        token: "token",
        username: "a",
        posts: [],
        likedPosts: [],
        sentInvites: [],
        receivedInvites: []
      }
    )
  })
})