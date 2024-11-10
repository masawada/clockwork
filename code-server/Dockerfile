FROM codercom/code-server:latest

WORKDIR /home/coder/clockwork

RUN code-server --install-extension slevesque.shader

CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "--disable-workspace-trust", "/home/coder/clockwork"]
