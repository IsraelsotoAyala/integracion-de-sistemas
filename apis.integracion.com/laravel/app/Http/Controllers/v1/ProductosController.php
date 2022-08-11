<?php
 
namespace App\Http\Controllers\v1;
 
use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;
 
class ProductosController extends Controller
{
    public function getAll()
    {
        $response = new \stdclass();

        $productos= Producto::all();

         $response->success=true;

         $response->data=$productos;

        return response()->json($response,200);
        
    }
    public function getItem($id)
    {
        $response = new \stdclass();

        $productos= Producto::find($id);

         $response->success=true;

         $response->data=$productos;

        return response()->json($response,200);
    }

    public function save(Request $request)
    {
      $response = new \stdclass();

        $producto= new Producto();
        $producto->codigo=$request->codigo;
        $producto->nombre=$request->nombre;
        $producto->categoria=$request->categoria;
        $producto->precio=$request->precio;
        
        $producto->save();

         $response->success=true;

         $response->data=$producto;

        return response()->json($response,200);  
    }
}