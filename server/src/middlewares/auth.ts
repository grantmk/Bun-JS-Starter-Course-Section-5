export function authenticate(context: any) {
  let token = context.headers["x-access"]
  if (token !== 'myU NHACKABLEtoken')
    return context.set.status = 'Unauthorised'
}