## 1xx - Informational
#### Code	Meaning	Description
100	Continue	The request is continuing. Client can proceed.
101	Switching Protocols	Protocol switching (e.g., HTTP to WebSocket).

## 2xx - Success
#### Code	Meaning	Description
200	OK	Request succeeded. Response body contains the data.
201	Created	New resource was created (typically for POST requests).
202	Accepted	Request accepted but not completed yet (async processing).
204	No Content	Request succeeded but no content to return.

## 3xx - Redirection
#### Code	Meaning	Description
301	Moved Permanently	Resource has a new permanent URI.
302	Found (Temporary Redirect)	Temporarily located at a different URI.
304	Not Modified	Resource not modified; client can use cached version.

## 4xx - Client Errors
#### Code	Meaning	Description
400	Bad Request	Invalid request due to malformed syntax or invalid data.
401	Unauthorized	Authentication required or invalid credentials.
403	Forbidden	Authenticated but not authorized to access.
404	Not Found	Requested resource does not exist.
405	Method Not Allowed	HTTP method (GET, POST, etc.) not supported on resource.
409	Conflict	Request conflicts with current resource state.
422	Unprocessable Entity	Server understands request but can't process it (e.g. validation error).

## 5xx - Server Errors
#### Code	Meaning	Description
500	Internal Server Error	Generic server-side error.
501	Not Implemented	Feature not implemented by server.
502	Bad Gateway	Invalid response from upstream server.
503	Service Unavailable	Server temporarily down or overloaded.
504	Gateway Timeout	Server did not receive timely response from upstream server.