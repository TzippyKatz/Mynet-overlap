# Mynet-overlap

## JSON-RPC

UserService and ContentService expose their manager operations as JSON-RPC
methods at `http://<service-host>:<service-port>/rpc`, alongside the existing
REST API. RPC requests pass positional method arguments in an `args` array.

Shared client factories are available from `libs/src/rpc`:

```ts
const users = userRPCService("localhost", userServicePort);
const allUsers = await users.getAllUsers();

const content = contentRPCService("localhost", contentServicePort);
const posts = await content.getAllPosts();
```

UserService methods: `createUser(username, displayedName)` and `getAllUsers()`.
ContentService methods: `createPost(userId, postName, text, media?)`,
`getAllPosts()`, `getPostById(id)`, `updatePost(id, postName?, text?, media?)`,
`deletePost(id)`, and `deletePostsByUserId(userId)` (used by UserService over
JSON-RPC).

The UserService REST API also supports
`DELETE /api/user-service/users/:username/posts`.
