if [ "$NODE_ENV" = "production" ]; then
  cd my-project
  deno task start
else
  /bin/bash
fi
