using Cad_ClienteApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Cad_ClienteApp.Controllers
{
    public class ClienteController : Controller
    {
        #region Método para listar - READ
        // GET Cliente/GetCliente
        public JsonResult GetCliente() 
        { 
            using(var db = new ClientesEntities())
            {
                List<Cliente> listarClientes = db.Clientes.ToList();

                return Json(listarClientes, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para adicionar - CREATE
        //POST Cliente/AddCliente
        [HttpPost]
        public JsonResult AddCliente(Cliente cliente) 
        {
            if (cliente != null)
            {
                using(var db = new ClientesEntities())
                {
                    db.Clientes.Add(cliente);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Método para Atualizar - UPDATE
        [HttpPost]
        public JsonResult UpdCliente(Cliente cliente)
        {
            using (var db = new ClientesEntities())
            {
                var clienteUpd = db.Clientes.Find(cliente.ClienteId);
                
                if (clienteUpd == null)
                {
                    return Json(new { success = false });
                }

                else
                {
                    clienteUpd.Nome = cliente.Nome;
                    clienteUpd.CPF = cliente.CPF;
                    clienteUpd.Telefone = cliente.Telefone;
                    clienteUpd.Endereco = cliente.Endereco;
                    clienteUpd.Observacao = cliente.Observacao;

                    db.SaveChanges();
                    return Json(new { success = true });
                }
            }            
        }


        #endregion

        #region Método para Ecluir - DELETE

        [HttpPost]
        public JsonResult DelCliente(int id)
        {
            using(var db = new ClientesEntities())
            {
                var cliente = db.Clientes.Find(id);
                if(cliente == null)
                {
                    return Json(new { success = false });
                }

                db.Clientes.Remove(cliente);
                db.SaveChanges();

                return Json(new { success = true });
            }            
        }

        #endregion

    }
}