
export const authenticate = (context: any) => {
  let token = context.headers["x-access"]
  console.log("User token: " + token!.substr(7))
  if (token!.substr(7) !== 'myUNHACKABLEtoken') {
    (context.set.status = 'Unauthorized')
    return JSON.stringify({message: "Error - not allowed h4XX0r."})
  }
}