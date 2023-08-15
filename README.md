# Tratangle

This would be a platform where 3D artists / coders can showcase their stuffs (probably like a gallery).
 
 Phase 1:
 - Develop API endpoints for CRUD operations of 3D objects.
 ### **3D Models & Assets**

- **Create 3D Model**: Allow users to create 3D model files.
    
    **`POST /api/3dmodels`**
    **Payload**:
    
    - **`modelFile`**: The 3D model file, typically in formats like OBJ, STL, or GLTF.
    - **`name`**: Name of the 3D model.
    - **`description`**: Optional description.
    
    ```java
    @PostMapping("/api/3dmodels")
    public ResponseEntity<ModelResponse> createModel(@RequestParam("modelFile") MultipartFile file,
                                                     @RequestParam("name") String name,
                                                     @RequestParam("description") String description) {
        
    }
    ```
    

- **Update 3D Model**: Modify the properties or replace an existing 3D model.
    
    **Endpoint**: **`PUT /api/3dmodels/{modelId}`**
    **Payload:**
    
    - **`modelFile`**: Optional new file to replace the existing one.
    - **`name`**: Optional new name.
    - **`description`**: Optional new description.
    
    ```java
    @PutMapping("/api/3dmodels/{modelId}")
    public ResponseEntity<ModelResponse> updateModel(@PathVariable Long modelId,
                                                     @RequestParam(required = false) MultipartFile file,
                                                     @RequestParam(required = false) String name,
                                                     @RequestParam(required = false) String description) {
       
    }
    ```
    

- **Delete 3D Model**: Remove a 3D model.
    
    **Endpoint**: **`DELETE /api/3dmodels/{modelId}`**
    
    ```java
    @DeleteMapping("/api/3dmodels/{modelId}")
    public ResponseEntity<Void> deleteModel(@PathVariable Long modelId) {
        
    }
    ```
    
- **List 3D Models**: Retrieve a list of available 3D models, possibly with filters.
    
    **Endpoint**: **`GET /api/3dmodels`**
    
    ```java
    @GetMapping("/api/3dmodels")
    public ResponseEntity<List<ModelResponse>> listModels() {
        
    }
    ```
    
- **Get 3D Model Details**: Retrieve details of a specific 3D model, including download links.
    
    **Endpoint**: **`GET /api/3dmodels/{modelId}`**
    
    ```java
    @GetMapping("/api/3dmodels/{modelId}")
    public ResponseEntity<ModelResponse> getModelDetails(@PathVariable Long modelId) {
        
    }
    ```