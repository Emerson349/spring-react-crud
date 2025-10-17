package com.example.cadastro_usuario.controller;

import com.example.cadastro_usuario.business.UsuarioService;
import com.example.cadastro_usuario.infrastructure.entitys.Usuario;
import com.example.cadastro_usuario.infrastructure.entitys.UsuarioRequestDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@AllArgsConstructor
public class UsuarioController {
    private final UsuarioService usuarioService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<Usuario> salvarUsuario(@RequestBody UsuarioRequestDTO usuarioDTO){
        Usuario usuario = Usuario.builder()
                .email(usuarioDTO.email())
                .nome(usuarioDTO.nome())
                .numero(usuarioDTO.numero())
                .build();
        usuarioService.salvarUsuario(usuario);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<Usuario> buscarPorEmail(@RequestParam String email){
        return ResponseEntity.ok(usuarioService.getUsuario(email));
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping
    public ResponseEntity<Usuario> deletarUsuario(@RequestParam String email){
        usuarioService.deletarUsuario(email);
        return ResponseEntity.ok().build();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Integer id, @RequestBody Usuario usuario){
        Usuario atualizado = usuarioService.atualizarUsuario(id, usuario);
        return ResponseEntity.ok(atualizado);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/listar")
    public List<Usuario> listarUsuarios(){
        return  usuarioService.getUsuarios();
    }
}
