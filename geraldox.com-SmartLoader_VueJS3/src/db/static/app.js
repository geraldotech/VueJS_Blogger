const API_URL = 'http://127.0.0.1:5000/posts'
let postModal
let currentId

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
  document.getElementById('postModalLabel').innerText = 'New Post'
  getCurrentPostID()
}

/* get PostID */
function getCurrentPostID() {
  currentId = document.getElementById('postId').value
}

// Abrir modal para editar post
async function openEditModal(id) {
  const res = await fetch(`${API_URL}/${id}`)
  const post = await res.json()

  document.getElementById('postId').value = post.id
  getCurrentPostID()
  // console.log(`currentId`, currentId)

  console.log(`post`, post)

  document.getElementById('title').value = post.title
  document.getElementById('slug').value = post.slug
  document.getElementById('author').value = post.author
  document.getElementById('published').checked = post.published
  document.getElementById('component').value = post.component ?? ''
  document.getElementById('category').value = post.category
  document.getElementById('article').value = post.article
  document.getElementById('createdat').value = post.createdAt

  document.getElementById('postModalLabel').innerText = 'Edit Post'
  postModal.show()
}

// Salvar post (create/update)
const savebtn = document.getElementById('savebtn')
const slugInput = document.getElementById('slug')

slugInput.addEventListener('blur', function () {
  const slugValue = slugInput.value.trim()
  if (!slugValue) {
    slugInput.classList.remove('is-valid', 'is-invalid')
    return
  }

  slugExists(slugValue).then((res) => {
    if (res.exists && res.id != currentId) {
      savebtn.innerText = 'Slug inválida'
      savebtn.disabled = true
      savebtn.title = 'slug já está em uso!'

      slugInput.classList.add('is-invalid') // vermelho
      slugInput.classList.remove('is-valid')
    } else {
      savebtn.innerText = 'Salvar'
      slugInput.classList.remove('is-invalid')
      slugInput.classList.add('is-valid') // verde
      savebtn.disabled = false
    }
  })
})

document.getElementById('title').addEventListener('input', (e) => {
  const slugField = document.getElementById('slug')
  if (!document.getElementById('postId').value) {
    // só em novo post
    slugField.value = e.target.value
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '')
  }
})

/* FN CHECK SLUG JA ESTA EM USO 
// se nao existe return: exists: false
// existe return: exists: true
*/
function slugExists(slugValue) {
  return fetch(`${API_URL}/check-slug/${slugValue}`).then((req) => {
    if (!req.ok) {
      throw new Error(`Error na requisição ${req.status}`)
    }
    return req.json()
  })
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault()
  const id = document.getElementById('postId').value

  const post = {
    title: document.getElementById('title').value,
    slug: document.getElementById('slug').value,
    author: document.getElementById('author').value,
    published: document.getElementById('published').checked,
    component: document.getElementById('component').value,
    category: document.getElementById('category').value,
    article: document.getElementById('article').value,
    createdAt: document.getElementById('createdat').value,
    //  createdAt: new Date().toLocaleDateString('pt-BR'),
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
  slugInput.classList.remove('is-valid')
  slugInput.classList.remove('is-invalid')
}

// Filtro de posts
document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase()
  const rows = document.querySelectorAll('#postsTable tr')

  rows.forEach((row) => {
    const text = row.innerText.toLowerCase()
    if (text.includes(filter)) {
      row.style.display = '' // mostra
    } else {
      row.style.display = 'none' // esconde
    }
  })
})

// Ativa todos os tooltips da página
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
;[...tooltipTriggerList].map((el) => new bootstrap.Tooltip(el))
