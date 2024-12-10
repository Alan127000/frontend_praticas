export const DropDown = () => {
    return (
        <div class="dropdown">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Ordenar</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                <a href="1" class="dropdown-item">
                    Dropdown item
                </a>
                <a href='1' class="dropdown-item">
                    Other dropdown item
                </a>
                <a href="2" class="dropdown-item is-active">
                    Active dropdown item
                </a>
                <a href="1" class="dropdown-item">
                    Other dropdown item
                </a>
                <hr class="dropdown-divider" />
                <a href="1" class="dropdown-item">
                    With a divider
                </a>
                </div>
            </div>
        </div>
    )
}