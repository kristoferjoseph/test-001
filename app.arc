@app
begin-app

@static
folder out

@http

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
