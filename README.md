**Principles that I followed when building the architecture of the application**

The applications are logically divided into four layers:
domain, store, ui, gateway

-   **domain** is completely isolated from the react world and contains the
    business logic of the project
-   **store** contains the redux state setup
-   **gateway** is a link between business logic, app state and ui
-   **ui** uses api which gateway modules provide and displays data

**How data from state gets to ui**

The application uses Redux to store data, but I decided to make the ui layer isolated from the redux as a library. I have highlighted one main advantage of this approach: by isolating the ui layer from direct dependency on redux, application components can be easily migrated and shared between different projects.

UI modules receive data through some StateProviders that gateway provides.
The logic for working with redux is in the gateway, and as a result gateway gives a Provider (using the React Context) with the data and methods to work with the state of the application.
In order for the ui module to have access to data, the root component of the module must be wrapped in a Provider and then receive data using a custom hook that gateway provides. We can use this Provider to provide data for difference modules

**The structure of the ui module**

Each module should be isolated from external changes and have its own folder structure. For example

@core/ <br>
components/ <br>
hooks/ <br>
pages/ <br>
views/ <br>
sections/ <br>
context/ <br>
providers/ <br>
index.ts <br>

The **@core/** folder contains the root component for the module to work. A module can provide multiple root components
**index.ts** exports root components from a module

The module is a completed feature. It can be a page, a widget, or any other part of the application that contains an encapsulated structure, the elements of which cannot logically be used outside of the module.

**Testing**

For example, two files are 100% covered by tests
domain/services/profile-substituter.service.ts
lib/event-emitter.ts

The tests are located in the **tests** folder of each layer
domain/** tests** | lib/** tests**

The tests use mocks, fakes and spy
