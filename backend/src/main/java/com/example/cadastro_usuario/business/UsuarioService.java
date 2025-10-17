package com.example.cadastro_usuario.business;

import com.example.cadastro_usuario.infrastructure.entitys.Usuario;
import com.example.cadastro_usuario.infrastructure.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public void salvarUsuario(Usuario usuario) {
        usuarioRepository.saveAndFlush(usuario);
    }

    public Usuario getUsuario(String email) {
        return usuarioRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("email não encontrado"));
    }

    public void deletarUsuario(String email) {
        usuarioRepository.deleteByEmail(email);
    }

    public Usuario atualizarUsuario(Integer id, Usuario usuario) {
        Usuario usuarioEntity = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario não encontrado"));
        if (usuario.getEmail() != null && !usuario.getEmail().isEmpty())
            usuarioEntity.setEmail(usuario.getEmail());
        if (usuario.getNome() != null)
            usuarioEntity.setNome(usuario.getNome());
        if (usuario.getNumero() != null)
            usuarioEntity.setNumero(usuario.getNumero());

        return usuarioRepository.saveAndFlush(usuarioEntity);
    }

    public List<Usuario> getUsuarios() {
        return usuarioRepository.findAll();
    }
}
