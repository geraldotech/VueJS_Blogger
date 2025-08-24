const API_URL = 'http://127.0.0.1:5000/posts'
let postModal

// Inicializa Bootstrap Modal
document.addEventListener('DOMContentLoaded', () => {
  postModal = new bootstrap.Modal(document.getElementById('postModal'))
  loadPosts()
})

// Carregar todos os posts
async function loadPosts() {
  const res = await fetch(API_URL)
  const posts = await res.json()
  const tbody = document.getElementById('postsTable')
  tbody.innerHTML = ''
  posts.forEach((post) => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.slug}</td>
      <td>${post.author}</td>
      <td>${post.published ? '✅' : '❌'}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="openEditModal(${post.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="deletePost(${post.id})">Excluir</button>
      </td>
    `
    tbody.appendChild(tr)
  })
}

// Abrir modal para novo post
function openCreateModal() {
  resetForm()
  document.getElementById('postModalLabel').innerText = 'Novo Post'
}

// Abrir modal para editar post
async function openEditModal(id) {
  const res = await fetch(`${API_URL}/${id}`)
  const post = await res.json()

  document.getElementById('postId').value = post.id
  document.getElementById('title').value = post.title
  document.getElementById('slug').value = post.slug
  document.getElementById('author').value = post.author
  document.getElementById('published').checked = post.published
  document.getElementById('category').value = post.category
  document.getElementById('article').value = post.article

  document.getElementById('postModalLabel').innerText = 'Editar Post'
  postModal.show()
}

// Salvar post (create/update)

const slug = document.getElementById('slug')
slug.addEventListener('blur', function () {
  if (!checkSlug()) {
    alert('❌ Essa slug já está em uso, escolha outra!')
  }
})

/* FN CHECK SLUG JA ESTA EM USO */
function checkSlug() {
  fetch(`${API_URL}/check-slug/${slug}`)
    .then((req) => {
      if (!req.ok) {
        throw new Error(`Error na requisição ${req.status}`)
      }
      return req.json()
    })
    .then((res) => {
      const check = res
      if (check.exists) {
        return false
      }
    })
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const id = document.getElementById('postId').value

  // Verifica slug se for criação
  if (!id) {
    if (!checkSlug()) {
      alert('❌ Essa slug já está em uso, escolha outra!') 
      return
    }
  }

  const post = {
    title: document.getElementById('title').value,
    slug: document.getElementById('slug').value,
    author: document.getElementById('author').value,
    published: document.getElementById('published').checked,
    category: document.getElementById('category').value,
    article: document.getElementById('article').value,
    createdAt: new Date().toLocaleDateString('pt-BR'),
  }

  if (id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
  }

  postModal.hide()
  loadPosts()
})

// Excluir post
async function deletePost(id) {
  if (confirm('Tem certeza que deseja excluir este post?')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    loadPosts()
  }
}

// Reset form
function resetForm() {
  document.getElementById('postForm').reset()
  document.getElementById('postId').value = ''
}
