from pathlib import Path

# Conteúdo do README
readme_content = """# CRUD FullStack (Spring Boot + React)

Este é um projeto **FullStack** desenvolvido com **Spring Boot (Java)** no back-end e **React** no front-end.

## Demonstração

🔗 **Acesse o projeto online:**  
👉 [https://spring-react-crud.vercel.app/](https://spring-react-crud.vercel.app/)

⚠️ **Observação importante:**  
O servidor back-end está hospedado no **Render**, que pode levar **alguns minutos** para iniciar após um período de inatividade.  
Se a página parecer “carregando” ou sem resposta nas primeiras tentativas, aguarde um pouco e atualize.

## Tecnologias utilizadas
- **Front-end:** React + Vite  
- **Back-end:** Spring Boot + PostgreSQL  
- **Hospedagem:**  
  - Front: [Vercel](https://vercel.com)  
  - Back: [Render](https://render.com)
"""

# Caminho do arquivo
file_path = Path("/mnt/data/README.md")

# Salva o arquivo
file_path.write_text(readme_content, encoding="utf-8")

file_path
